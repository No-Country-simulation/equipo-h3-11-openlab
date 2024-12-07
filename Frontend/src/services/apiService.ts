export const fetchWithToken = async (url: string, token: string, options: RequestInit = {}) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      ...options.headers, // Combina con headers personalizados si los hay
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al realizar el fetch:", error);
    throw error;
  }
};
