import faq_image from "../../../assets/images/faq_image.png"

const Faq = () => {
  return (
    <div className="my-8 mx-2">
      <div>
        <h1 className="text-center font-semibold text-xl md:text-4xl my-4 text-[#045281]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex justify-between items-center gap-12">
        <div className="space-y-8">
          <div className="collapse px-2 py-1 md:px-6 md:py-2 border-[.5px] hover:shadow-lg transition-transform border-[#0f80de] collapse-arrow">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title md:text-2xl font-medium text-[#045281]">
              Can I find a professional to help with my assignment?
            </div>
            <div className="collapse-content">
              <p>
                We can guarantee that any student using our essay writing
                services can find a suitable expert to do any work for them.
                Just send your requirements, state the deadline, include topic.
                Besides, our experts can handle various assignment types,
                including complex subjects.
              </p>
            </div>
          </div>
          <div className="collapse px-2 py-1 md:px-6 md:py-2 border-[.5px] hover:shadow-lg transition-transform border-[#0f80de] collapse-arrow">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title md:text-2xl font-medium text-[#045281]">
              Will I be able to communicate with the writer?
            </div>
            <div className="collapse-content">
              <p>
                We can guarantee that any student using our essay writing
                services can find a suitable expert to do any work for them.
                Just send your requirements, state the deadline, include topic.
                Besides, our experts can handle various assignment types,
                including complex subjects.
              </p>
            </div>
          </div>
          <div className="collapse px-2 py-1 md:px-6 md:py-2 border-[.5px] hover:shadow-lg transition-transform border-[#0f80de] collapse-arrow">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title md:text-2xl font-medium text-[#045281]">
              What is your customer satisfaction policy?
            </div>
            <div className="collapse-content">
              <p>
                We have huge experience in providing legit essay writing help
                for students from Great Britain as well as other countries all
                over the world. It is a great opportunity to get your custom
                papers of the highest quality that are delivered on time. Our
                assignment help company is truly customer-oriented. You can do
                as many revisions as needed and you only pay after getting
                perfect results.
              </p>
            </div>
          </div>
          <div className="collapse px-2 py-1 md:px-6 md:py-2 border-[.5px] hover:shadow-lg transition-transform border-[#0f80de] collapse-arrow">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title md:text-2xl font-medium text-[#045281]">
              Is your service confidential?
            </div>
            <div className="collapse-content">
              <p>
                We respect our client’s rights to stay anonymous so created our
                Privacy Policy. Also, the transaction lays only between you and
                writer. You do not have to worry someone will find out. All you
                have to focus on is getting your assignment help on time for
                submitting it without haste.
              </p>
            </div>
          </div>
          <div className="collapse px-2 py-1 md:px-6 md:py-2 border-[.5px] hover:shadow-lg transition-transform border-[#0f80de] collapse-arrow">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title md:text-2xl font-medium text-[#045281]">
              Is refund possible?
            </div>
            <div className="collapse-content">
              <p>
                There is a money back guarantee if the requirements were not met
                and the customer is not satisfied with the delivered work. The
                refunds are issued back to the original method of payment. We
                are aimed at providing the best assignment help.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block">
            <img className="hidden md:block" src={faq_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
