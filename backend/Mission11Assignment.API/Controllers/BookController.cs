using Microsoft.AspNetCore.Mvc;
using Mission11Assignment.API.Data;

namespace Mission11Assignment.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : ControllerBase
{
    private BookDbContext _bookContext;

    public BookController(BookDbContext temp) => _bookContext = temp;
    
    public IEnumerable<Book> Books()
    {
        var toBooks = _bookContext.Books.ToList();
        return toBooks;
    }
}