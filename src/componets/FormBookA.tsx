export default function FormBookA(){
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md w-96 h-[500px] mx-auto overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>
                <form className="space-y-4">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name*
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department*
                    </label>
                    <select
                        id="department"
                        name="department"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Please Select</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="legal">Legal</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Time*
                    </label>
                    <select
                        id="time"
                        name="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">4:00 Available</option>
                        <option value="4:30">4:30 Available</option>
                        <option value="5:00">5:00 Available</option>
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out mt-4"
                    >
                    Book Appointment
                    </button>
                </form>
            </div>
        </>
    )
}