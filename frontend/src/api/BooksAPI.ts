import { Book } from "../types/Book";

interface FetchBooksResponse {
    books: Book[],
    totalNumBooks: number; 
}

const API_URL = 'https://mission13builtinbackend.azurewebsites.net/api/'

export const fetchBooks = async (
    pageSize: number,
    pageNum: number,
    selectedCategories: string[]
): Promise<FetchBooksResponse> => {

    try {
     const categoryParams = selectedCategories
      .map((cat) => `bookCategories=${encodeURIComponent(cat)}`)
      .join(`&`);
      const response = await fetch(
        `${API_URL}/Book?pageSize=${pageSize}&pageNum=${pageNum}${selectedCategories.length ? `&${categoryParams}` : ''}`      );

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        
        return await response.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }     
};

export const addBook = async (newBook: Book): Promise<Book> => {

    try {
        const response = await fetch(`${API_URL}/Book/AddBook`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) {
            throw new Error('Failed to add book');

        }

        return await response.json();
        } catch (error) {
            console.error('Error adding book', error);
            throw error;
    }
};


export const updateBook = async (bookId: number, updatedBook: Book): Promise<Book> => {
    try {
        console.log(`Updating book ID ${bookId}: Page Count =`, updatedBook.pageCount);

        const response = await fetch(`${API_URL}/Book/UpdateBook/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        });

        return await response.json();
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
};

export const deleteBook = async (bookId: number): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}/Book/DeleteBook/${bookId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error('Failed to delete book') ;
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
};