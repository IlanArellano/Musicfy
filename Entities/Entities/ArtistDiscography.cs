using Entities.Base;

namespace Entities.Entities
{
    public class ArtistDiscography : Register
    {
        public Guid artistId { get; set; }
        public Guid collectionId { get; set; }

    }
}
