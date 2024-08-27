using ADO.Logic;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserLogic logic;

        public UserController(UserLogic _logic)
        {
            logic = _logic;
        }


        [HttpGet]
        public async Task<List<User>> Get()
        {
            List<User> list = (await logic.Search()).ToList();
            return list;
        }

        [HttpPost]
        public void Login([FromBody] string value)
        {
        }

        [HttpPost]
        public void Register([FromBody] string value)
        {

        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
