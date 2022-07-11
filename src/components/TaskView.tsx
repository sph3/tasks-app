export const TaskView = () => {
  return (
    <div className='p-3 mt-2 flex flex-col gap-4 pb-28'>
      <div>
        <h1 className='text-3xl font-bold text-ctp-text'>Task Title Here</h1>
        <h2 className='text-xl text-ctp-subtext0'>
          Created at: 10/07/2022, 23:06
        </h2>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-ctp-text'>Details:</h1>
        <div className='mt-1 bg-ctp-surface0 rounded-2xl p-3 w-full flex items-center justify-center h-auto min-h-[64px] max-h-80 overflow-y-scroll'>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            blanditiis saepe facilis velit corrupti eligendi! Recusandae rerum
            quaerat sequi modi et veritatis voluptates similique numquam,
            voluptatibus velit soluta accusantium laudantium. Quisquam nisi
            molestiae aperiam quibusdam officia.
          </p>
        </div>
      </div>
    </div>
  );
};
