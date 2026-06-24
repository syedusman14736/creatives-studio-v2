import Badge from "../../../components/common/Badge"

function Services() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-[12px] lg:text-[16px]">
            <div className="text-[12px] lg:text-[14px] flex justify-center">
                <Badge title="OUR SERVICES" />
            </div>
            <div className="mt-6">
                <h1 className="font-semibold md:text-start text-[28px] lg:text-[48px] text-center mt-2 leading-8 lg:leading-13">What Services <br /> WE're Offering</h1>
            </div>
            <div className="mt-12">
                <div className="py-6 border-b border-gray-300">
                    <h1 className="text-[24px] lg:text-[40px] text-[#89190D] font-medium">Branding</h1>
                </div>
                <div className="py-6 border-b border-gray-300">
                    <h1 className="text-[24px] lg:text-[40px] text-[#89190D] font-medium">Graphic Designing</h1>
                </div>
                <div className="py-6 border-b border-gray-300">
                    <h1 className="text-[24px] lg:text-[40px] text-[#89190D] font-medium">Development</h1>
                </div>
                <div className="py-6 border-b border-gray-300">
                    <h1 className="text-[24px] lg:text-[40px] text-[#89190D] font-medium">UI/UX Design</h1>
                </div>
                <div className="py-6 border-b border-gray-300">
                    <h1 className="text-[24px] lg:text-[40px] text-[#89190D] font-medium">SEO</h1>
                </div>
            </div>

        </div>
    )
}

export default Services