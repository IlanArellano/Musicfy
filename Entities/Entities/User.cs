using Entities.Base;

namespace Entities.Entities
{
    public class User: BaseEntity<Guid>
    {
        public string username { get; set; }
        public string password { get; }
        public string email { get; set; }
        public string imgUrl { get; set; } 
    }
}
