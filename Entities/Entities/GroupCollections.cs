using Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    public class GroupCollections : Register
    {
        public Guid groupId { get; set; }
        public Guid collectionId { get; set; }

        [ForeignKey(nameof(groupId))]
        public virtual Groups Group { get; set; }

        [ForeignKey(nameof(collectionId))]
        public virtual Collection Collection { get; set; }
    }
}
