

using Entities.Base;
using Entities.Base.Interfaces;

namespace Entities.Entities
{
    public class UserPlaylist : BaseEntity<int>, IName
    {
        public string name { get; set; }
        public Guid userId { get; set; }
    }
}
