import { useSelector } from "react-redux"

const Navbar = () => {
    
  const userEmail= useSelector((state) => state)
    return (
      <nav className="p-4  overflow-none w-full bg-gray-50 font-montserrat">
        <ul className="flex justify-between max-phone:flex-col">
          <li >
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAoCAMAAAD5T/mNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjpQTFRFOTExOMqzo5+fysjIbmho8vHxRj8/iIOD19bW5eTksK2tU0xMe3Z2vbq6YVpalZGRft3OT9C8Pcu1+/7++v79y/Hr5Pj1/f/+SM65RM23OcqznOXZ7fr4Qcy3S8+69/388/z74ff0QMy2PMu06Pn2Q8234/j0U9G9z/LtRc64ve3moebbctnJ+P38xfDp+f397/v5Osu0X9TC7Pr42PXwRs64we7nSc+6Ss+6hd/RjeHTWtPAzPHsZ9bFRM248Pv5rengXdTB7vr4we/n/f7+xvDp/P7+j+HUZNbEa9jGmOTYetzMhN7QbdjHUNC83vbysurhbNjHWdPA6fn3yfHqedvM0vPuzvLsuu3lYdXDw+/ob9nIYtXDgd7Pgd3PaNfFV9K/ddrK3/bz4ffzdtvLv+7ni+DTP8y20/Pus+vim+TZYdXCOsq0iN/SR865Psy1c9rJ2vXxiuDS1PTvmeTYTM+69v37q+nftOvioObbkeLVY9XDk+LW9v38t+zkserhzfLs4vf0qujfpOfcoubcfNzN5/n2uu3kwO7n9fz78/z6c9rKxO/p0PPt1vTwqejetuvjr+rh3PbyUdG9nuXad9vLrOnfluPXqOjeyPDqcNnI1/Tw2fXw0fPtdNrK8vv6kOHVVtK/1vTvx/Dqwu/oYNXCQs23uOzk5fj11fTvO8u0f93O5vj1ve7m8fv6VdK+ZtbF6/r4UtG9r+rgpefdsOrhl+PXlOPW6/r33fbyfdzOiN/RetvM////QVH5fgAAAL50Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJOw04YAAASuSURBVHja7Jjld9tIEMAFK8kyKLZjJ3E4bZiTXsOchsrMjFdm7mF7zMzMzHz637q8a8n2u3v3np0PNx/s3dFq56fdmdmRFHfxiLKIWer72v6K/rnnxk/P3FdYltrth8tUKkv23/iicCyl1yYRQ2x4ODb2JcKJP3JPgVjq2lX1++vbursqD721+fjQaBWkabheXAiWnWXqu81ux/TpHbEzZ2KT+86txVu1pTv/LK09A0fch45eHrh5bkv75BKVy/zv+WaZUXvrEi/vGxqZ6oK9K/XfRLkTb3givyyNqZPdm157eFy6cPBCD4VZnVeW2Q399TXTn3sudTZRmMd8d+m6/d/M2roeyMxyrTzpfjtLNV01K2ir8RPC0lTJRgcBAK5tKVCciDxNQAsDYGmU0AIgzLEB0Fhbg7cbrmsUmWgGUzP8LB0/DrHuh23RhdEDK5tJr4SuzB0+GZxCxxNBCQoSQFWKZbNhDDUMjVKbBlQDOJpNoDiGj+X+6mWks/WpKmL8bPu9WNFMAuq7WokFTQjwdDpbLUWIGaBG6cLYEjVFBGI08LGs+Y3k3YpjyHB5w1i5qn56FevmCFufzBK2aSssoYQsTQMcBu2iLe5wyMAQHOYiFhNtZhA9T8DDUrLxEGoVnyZ2ly7cmriQUtUJ7DItWDcosVikiQyLJycuYYcVYi4A/4uYfWYyQscBy+DPoHlYWnfh1kqe3uLzI/BASL2NtFGs6a0RLBJWgDqEcB2LdgD1kgh1I1fWcdt+lhM/o8YbPSLXqvGZ2ai6pxSqH8D96kYfi04dxhBLhXom2ZGgYApZhMFOG5iFZS6JIvmmKsvayisbU8ijt57F+3YxK0tEihkoRbBrcN9A9jWdcAkfosFXlIHlUgn8P6Kmy3p3u/oOCusx3E1mZZFUXrWOyWzE5eAVE2Fja8SRvCy/oIhdxSka+tHvnDsV64T6TcuxcvO/ZbFxnJk42LBraZJb4XwU0jKwJGGNMl7NUAbXlbwA7d9yi99EOaauASlPNedkkVJWhOUdtCU0oWCXogHNAghEMvrLMpjzty2lKAeQw34cVz9zaypQ6TKCL6RezMqi+/2FXzepfQs3meEAa2ZgQfI8W5ZO3N1V9oObwKdQG9Z+MJ4zjoAvjqA4wiF0EtkGPxWAm4PlKmMhFe6vbfRyxzzWHnazsuDNYLFqOMIrgpL9kCIN4ghZWCYYy+OkeEmwco9oX83BgpaCnAuu7siLZAr7miLle67OwtJaTllWpWWjqf1Yubw+Bwvef+gY9MAUZ68mjs+0jXQIFz4wIIvhZTl/jGXcnRJK4m+iPOrmYpGKgLQywBaRgzYyKIea4pDT2gT8tOcsiWG2SbGL/NqTe4mq5Y/cLKw4graD8qqGhf2AYgo9qTyAjnGA7XsPqOC5buA4eScq/aiXai79g6JR1zQt6CkbA1LhpslloA0Ho7FB8udl+bpM5P+TJ6aTT99eYC60uzbf72qvpx1Hp0Sz+nze3xtX7FUzStVMAd6nO77KhNLSV5DvDImKuA9lx7OF+v7y4BrP/rz/XuG+SxV3vtLCSfoH8/v5xf+9bt1z0d0vXW4aXb3+0f+/HS4OuSvAABdIr6VVPZj9AAAAAElFTkSuQmCC" alt="icon" />
          </li>
          <li className="pr-4 pt-2 ">
            abc@mail.com
          </li>
          
        </ul>
      </nav>
    )
  }
  
  export default Navbar