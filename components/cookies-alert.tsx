export default function CookieAlert () {
  return <div id="cookies-alert" className="fixed inset-x-0 bottom-0 p-4">
    <div id="alert-additional-content-5" className="sm:w-96 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
      <div className="flex items-center">
        <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">This site uses cookies</h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
        I selected third party to use two cookies just for technical purposes, to enhance and analyze this site usage.
        By visiting, you agree that I can use the cookies. 
      </div>
      <div className="flex">
        <button id="cookies-alert-btn" type="button" className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
          Dismiss
        </button>
      </div>
    </div>
  </div>
}