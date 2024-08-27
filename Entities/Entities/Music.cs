using Entities.Base;
using Entities.Base.Interfaces;

namespace Entities.Entities
{
    public class Music : BaseEntity<Guid>, IName
    {
        public string name { get; set; }
        public decimal duration { get; set; }
        public DateTime releaseDate { get; set; }
        public string audioUrl { get; set; }
    }
}
