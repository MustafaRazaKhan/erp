// ===============================
// GET
// ===============================

export const apiGet = async <T>(url: string): Promise<T> => {
  try {
    // Send GET request to the given URL
    const response = await fetch(url);

    // Check if the server returned an error status
    if (!response.ok) {
      throw new Error("Request failed");
    }

    // Convert the response from JSON to JavaScript object
    return response.json();
  } catch (error) {
    // Handle network errors or errors thrown above
    console.error("GET API Error:", error);

    // Send the error to the caller
    throw error;
  }
};

// ===============================
// POST
// ===============================

export const apiPost = async <T>(url: string, data: unknown): Promise<T> => {
  try {
    // console.log(data);
    // Send POST request
    const response = await fetch(url, {
      method: "POST",

      // Tell the server that we are sending JSON
      headers: {
        "Content-Type": "application/json",
      },

      // Convert JavaScript object into JSON
      body: JSON.stringify(data),
    });

    // Check if the request failed
    if (!response.ok) {
      throw new Error("Request failed");
    }

    // Convert JSON response into JavaScript object
    return response.json();
  } catch (error) {
    // Handle API/network error
    console.error("POST API Error:", error);

    // Pass the error back to the service/thunk
    throw error;
  }
};

// ===============================
// UPDATE
// ===============================

export const apiUpdate = async <T>(url: string, data: unknown): Promise<T> => {
  try {
    // Send PUT request
    const response = await fetch(url, {
      method: "PUT",

      // Tell the server that we are sending JSON
      headers: {
        "Content-Type": "application/json",
      },

      // Convert JavaScript object into JSON
      body: JSON.stringify(data),
    });

    // Check if the request failed
    if (!response.ok) {
      throw new Error("Request failed");
    }

    // Convert JSON response into JavaScript object
    return response.json();
  } catch (error) {
    // Handle API/network error
    console.error("UPDATE API Error:", error);

    // Pass the error back to the service/thunk
    throw error;
  }
};

// ===============================
// DELETE
// ===============================

export const apiDelete = async <T>(url: string): Promise<T> => {
  try {
    // Send DELETE request
    const response = await fetch(url, {
      method: "DELETE",
    });

    // Check if the request failed
    if (!response.ok) {
      throw new Error("Request failed");
    }

    // Convert JSON response into JavaScript object
    return response.json();
  } catch (error) {
    // Handle API/network error
    console.error("DELETE API Error:", error);

    // Pass the error back to the service/thunk
    throw error;
  }
};
