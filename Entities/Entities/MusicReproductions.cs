using Entities.Base;

namespace Entities.Entities
{
    internal class MusicReproductions : Register
    {
        public Guid musicId { get; set; }
        public int reproductions { get; set; }
    }
}
