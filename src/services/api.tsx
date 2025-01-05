

import axios from 'axios';

// A simple retry mechanism
const retryRequest = async (url: string, data: any, retries: number, delay: number) => {
  let attempt = 0;
  while (attempt < retries) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error: any) {
      if (error.response && error.response.status === 503) {
        console.log(`Model is loading, retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
        attempt++;
        delay *= 2; // Exponential backoff
      } else {
        throw error; // If error is not related to the model loading, throw it
      }
    }
  }
  throw new Error("Max retries reached, model still unavailable.");
};

export const generateCoverLetter = async (jobDescription: string): Promise<string> => {
  const apiKey = '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'; // Replace with your Hugging Face API Key
  const model = 'distilgpt2'; // Model name
  const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

  const data = {
    inputs: `Generate a professional cover letter based on the following job description: ${jobDescription}`,
  };

  try {
    // Use retry mechanism
    const response = await retryRequest(apiUrl, data, 5, 1000); // Retry 5 times with 1 second delay (exponential backoff)
    
    if (response.data && response.data[0] && response.data[0].generated_text) {
      return response.data[0].generated_text;
    } else {
      throw new Error('No text generated from the model');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Generic error occurred:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
    throw error; // Re-throw the error to let it propagate
  }
};
