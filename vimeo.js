import axios from 'axios';

const API_KEY = 'cd52c594122d2148e8eb821b4f9a9f4b36fbde20';

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};