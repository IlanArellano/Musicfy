using Entities.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    public class SharedUsers : Register
    {
        public Guid userId { get; set; }
        public Guid sharedUserId { get; set; }

        [ForeignKey(nameof(sharedUserId))]
        public virtual ICollection<User> sharedUsers { get; set;}
    }
}
