using Entities.Base;
using Entities.Base.Interfaces;
using Entities.Entities.Catalogs;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    public class Collection : BaseEntity<Guid>, IName
    {
        public string name { get; set; }
        public int catCollectionId { get; set; }
        public DateTime releaseDate { get; set; }
        public string imageUrl { get; set; }
        
        [ForeignKey(nameof(catCollectionId))]
        public virtual CatCollection catCollection { get; set; }
    }
}
