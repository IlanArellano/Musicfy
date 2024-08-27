using Entities.Base;
using Entities.Base.Interfaces;

namespace Entities.Entities
{
    public class Artist : BaseEntity<Guid>, IName
    {
        public string name { get; set; }
        public string description { get; set; }
        public int type { get; set; }
        public DateTime releaseDate { get; set; }
        public string status { get; set; }

    }
}
