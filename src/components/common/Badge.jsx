function Badge({ title }) {
    return (
        <span className="px-4 w-fit py-1 border border-transparent bg-[linear-gradient(white,white),linear-gradient(270deg,#B16CEA_0%,#FE6267_53.6%,#FFA84C_100%)] bg-origin-border [background-clip:padding-box,border-box] rounded-md">
            # {title}
        </span>
    )
}

export default Badge