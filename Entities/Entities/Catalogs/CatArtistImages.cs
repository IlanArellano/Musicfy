using Entities.Base;
using Entities.Base.Interfaces;

namespace Entities.Entities.Catalogs
{
    public class CatArtistImages: BaseEntity<int>, IName
    {
        public string name { get; set; }

    }
}
