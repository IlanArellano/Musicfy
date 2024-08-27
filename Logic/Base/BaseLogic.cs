
using Entities.Base;

namespace Logic.Base
{
    public abstract class BaseLogic<IType, IKey> where IType : BaseEntity<IKey>
    {
        public abstract ICollection<IType> GetAll();

        public abstract IType GetById(IKey id);


        public abstract void Add(IType entity);
        

        public abstract void Modify(IType entity);

        public abstract void Delete(IKey id);

    }
}
