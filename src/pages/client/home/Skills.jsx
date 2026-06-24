import Badge from "../../../components/common/Badge"

function Skills() {
    return (
        <div className="bg-[#89190D]">
            <div className="max-w-7xl py-12 mx-auto px-4">
                <div className="text-[12px] lg:text-[14px] flex flex-col gap-4 items-center">
                    <Badge title="SKILLS" />
                    <h1 className="mt-3 hidden md:block font-semibold md:text-start text-[28px] text-center leading-8 text-white">Experience & Proficiency</h1>
                </div>
                <div className="mt-8 pb-12 flex flex-col gap-6 md:max-w-[80%] mx-auto">
                    <div className="flex flex-col">
                        <div className="flex justify-between text-white">
                            <span>Graphic Designing</span>
                            <span>90%</span>
                        </div>
                        <div className="mt-2">
                            <div className="h-3 bg-white rounded-md">
                                <div className="w-full h-full rounded-full max-w-[90%] bg-[#CF922F]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between text-white">
                            <span>Video Editing</span>
                            <span>90%</span>
                        </div>
                        <div className="mt-2">
                            <div className="h-3 bg-white rounded-md">
                                <div className="w-full h-full rounded-full max-w-[90%] bg-[#CF922F]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between text-white">
                            <span>Social Media Marketing</span>
                            <span>90%</span>
                        </div>
                        <div className="mt-2">
                            <div className="h-3 bg-white rounded-md">
                                <div className="w-full h-full rounded-full max-w-[90%] bg-[#CF922F]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between text-white">
                            <span>Web Development</span>
                            <span>90%</span>
                        </div>
                        <div className="mt-2">
                            <div className="h-3 bg-white rounded-md">
                                <div className="w-full h-full rounded-full max-w-[90%] bg-[#CF922F]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills