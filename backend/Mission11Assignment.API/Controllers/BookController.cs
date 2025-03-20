using Microsoft.AspNetCore.Mvc;
using Mission11Assignment.API.Data;

namespace Mission11Assignment.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : ControllerBase
{
    private BookDbContext _bookContext;

    public BookController(BookDbContext temp) => _bookContext = temp;

    public OkObjectResult Get(int pageHowMany = 5, int pageNum = 1)
    {
        var toBooks = _bookContext.Books
            .Skip((pageNum - 1) * pageHowMany)
            .Take(pageHowMany)
            .ToList();

        var totalNumBooks = _bookContext.Books.Count();

        var response = new
        {
            books = toBooks,  // Ensure the key matches frontend expectations
            totalNumBooks = totalNumBooks
        };

        return Ok(response);
    }

}