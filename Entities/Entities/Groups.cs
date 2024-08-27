using Entities.Base;
using Entities.Base.Interfaces;

namespace Entities.Entities
{
    public class Groups: BaseEntity<Guid>, IName
    {
        public string name { get; set; }
    }
}
