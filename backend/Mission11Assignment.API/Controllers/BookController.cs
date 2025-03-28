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

}