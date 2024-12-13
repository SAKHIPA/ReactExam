using BookMgnt.Data;
using BookMgnt.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookMgnt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CntegoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CntegoryController(ApplicationDbContext context)
        {
            _context = context;



        }

       

       

        [HttpPost("Catogory")]
        public async Task<ActionResult<Category>> Category(Category category)
        {
          
            var cate = new Category
            {
                name = category.name,
                description = category.description,
               

            };
            _context.Categorys.Add(cate);
            _context.SaveChanges();
            return Ok("Successfully Added");
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> Getcategory()
        {
            return  _context.Categorys.ToList();
        }
    }
}
