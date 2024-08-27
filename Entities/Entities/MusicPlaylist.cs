using Entities.Base;

namespace Entities.Entities
{
    public class MusicPlaylist : Register
    {
        public int userPlaylistId { get; set; }
        public Guid musicId { get; set; }
    }
}
