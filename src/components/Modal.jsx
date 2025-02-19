import { Dialog, DialogPanel } from "@headlessui/react";
import { useServiceContext } from "./Contents/services/ServicesContent";
import InputGroup from "./Ui/Input-Group";
import Button from "./Ui/Button";

function Modal() {
  const { isOpen, toggleModal } = useServiceContext();

  return (
    <Dialog open={isOpen} onClose={toggleModal} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
        <DialogPanel className=" rounded-lg w-full mx-4 md:mx-0 max-w-md bg-white p-6 space-y-4">
          <div className="text-center">
            <h1 className="text-xl font-bold">Book a Free Consultation</h1>
            <p className="text-gray-600 text-sm">
              Let's discuss your business goals and how we can help!
            </p>
          </div>

          <form className="space-y-3">
            {/* Two inputs per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup label="Name" type="text" name="name" required placeholder="Full name" />
              <InputGroup label="Email" type="email" name="email" required placeholder="Email address" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup label="Phone" type="tel" name="phone" placeholder="Phone number" />
              <InputGroup label="Date" type="datetime-local" name="date" required />
            </div>

            <InputGroup label="Message" name="message" isTextArea placeholder="Your message" />

          <div className="grid grid-cols-2 gap-3">
                    <Button butttontext="Cancel" onClick = {toggleModal} className="border border-gray-500 text-gray-900" />
                <Button butttontext="    Confirm Booking" type="submit" className="w-full bg-blue-600 text-white py-2  hover:bg-blue-700 transition" />
              
               
          </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Modal;
