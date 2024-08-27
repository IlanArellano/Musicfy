using Entities.Base;

namespace Entities.Entities
{
    public class MusicTags : Register
    {
        public int tagId { get; set; }
        public Guid musicId { get; set; }
    }
}
