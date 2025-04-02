using Microsoft.AspNetCore.Mvc;
using Mission11Assignment.API.Data;

namespace Mission11Assignment.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : ControllerBase
{
    private BookDbContext _bookContext;

    public BookController(BookDbContext temp) => _bookContext = temp;

    public OkObjectResult Get(int pageHowMany = 5, int pageNum = 1, [FromQuery] List<string>? bookCategories = null)
    {
        var query = _bookContext.Books.AsQueryable();
        
        if (bookCategories != null && bookCategories.Any())
        {
            query = query.Where(book => bookCategories.Contains(book.Category));
        }
        
        var toBooks = query
            .Skip((pageNum - 1) * pageHowMany)
            .Take(pageHowMany)
            .ToList();

        var totalNumBooks = query.Count();

        var response = new
        {
            books = toBooks,  // Ensure the key matches frontend expectations
            totalNumBooks = totalNumBooks
        };

        return Ok(response);
    }

    [HttpGet("GetBookCategory")]
    public IActionResult GetBookCategory()
    {
        var bookCategories = _bookContext.Books
            .Select(b => b.Category)
            .Distinct()
            .ToList();
        return Ok(bookCategories);
    }

    [HttpPost("AddBook")]
    public IActionResult AddBook([FromBody] Book newBook)
    {
        _bookContext.Books.Add(newBook);
        _bookContext.SaveChanges();
        return Ok(newBook);
    }

    [HttpPut("UpdateBook/{bookId}")]
    public IActionResult UpdateBook(int bookId, [FromBody] Book updatedBook) 
    {
        var existingBook = _bookContext.Books.Find(bookId);

        existingBook.Title = updatedBook.Title;
        existingBook.Author = updatedBook.Author;
        existingBook.Publisher = updatedBook.Publisher;
        existingBook.ISBN = updatedBook.ISBN;
        existingBook.Classification = updatedBook.Classification;
        existingBook.Category = updatedBook.Category;
        existingBook.PageCount = updatedBook.PageCount;
        existingBook.Price = updatedBook.Price;

        _bookContext.Books.Update(existingBook);
        _bookContext.SaveChanges();

        return Ok(existingBook);

    }

    [HttpDelete("DeleteBook/{bookId}")]
    public IActionResult DeleteBook(int bookId)
    {
        var book = _bookContext.Books.Find(bookId);

        if (book == null)
        {
            return NotFound(new {message = "Book not found"});
        }

        _bookContext.Books.Remove(book);
        _bookContext.SaveChanges();

        return NoContent();
    }
}