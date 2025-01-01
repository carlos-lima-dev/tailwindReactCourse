import {useState} from "react";

const Responsive = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Responsive Header</h1>
        {/* Burger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`md:hidden fixed inset-0 bg-green-500 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-1/4 md:block`}>
        <div className="p-4">
          <h2 className="text-lg font-bold">Sidebar</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-gray-100 flex-1 p-4">
        <p className="text-pretty leading-3	tracking-wide	text-2xl">
          Main content goes here
        </p>
        <p className="text-pretty leading-3	tracking-wide	">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta earum
          facilis, ea provident consectetur cum error saepe nobis nulla quod
          eveniet, quos reprehenderit aperiam, non animi. Amet officiis ab
          error.
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          deserunt modi, eos id tenetur sequi numquam voluptates quia nulla
          aliquam esse accusamus quaerat cumque, at natus eveniet quos.
          Mollitia, facilis!
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          amet ipsa consequuntur minus porro sapiente cum enim in nesciunt,
          dicta nemo laudantium dolor modi, qui ratione est, repellat at
          dolorum!
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem,
          facilis qui numquam sint tempore aliquam laboriosam soluta voluptate
          sit tempora, recusandae eligendi ab odio ut minus cum fuga culpa?
        </p>
        <p className="text-pretty">
          Main content goes Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolore amet mollitia ad fuga corrupti, tempore fugiat ipsum
          sequi. Provident officia vero voluptatum fuga aliquam corporis ullam,
          eligendi adipisci error magni?
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          deleniti labore sequi, eos, saepe praesentium pariatur doloremque
          doloribus autem dolore placeat porro dolorum eum? Quam laudantium
          inventore minus tempora molestias?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          sit inventore placeat incidunt vel ea laboriosam architecto quas vero
          omnis totam dolores pariatur earum, magnam doloremque, consequatur
          reiciendis quo corporis!
        </p>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          tempora! Possimus delectus quae ex. Veniam illum quaerat nemo
          inventore vitae nisi alias, sapiente exercitationem, quisquam ducimus
          modi quis odit porro!
        </h1>
      </main>

      {/* Footer */}
      <footer className="bg-red-500 text-white p-4 text-center">
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Responsive;
