using Entities.Base;

namespace Entities.Entities
{
    public class ArtistMusic : Register
    {
        public Guid artistId { get; set; }
        public Guid musicId { get; set; }

    }
}
