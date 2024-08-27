using Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    public class MusicCollections : Register
    {
        public Guid collectionId { get; set; }
        public Guid musicId { get; set; }

        [ForeignKey(nameof(musicId))]
        public Music Music { get; set; }

        [ForeignKey(nameof(collectionId))]
        public ICollection<Collection> Collections { get; set; }
    }
}
