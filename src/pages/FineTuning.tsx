import { useState, useEffect } from 'react'


function FineTuning() {
  const [content, setContent] = useState(null);
  const [buttonPushed, setButtonPushed] = useState(1);


  const showContentEditor = () => {
    setContent(
      <div>
        <div className="w-full flex gap-5 bg-slate-200 p-5 rounded-xl text-slate-800">
          <div>
            <p className="mb-3"><strong>Fine Tuned Model Name</strong></p>
            <input className="h-12 w-64 rounded-xl border border-slate-800" type="text" />
          </div>
          <div>
            <p className="mb-3"><strong>Base Model</strong></p>
            <select name="" id="" className="w-64 h-12 rounded-md border border-slate-800 bg-white">
              <option disabled hidden selected>Select the Model</option>
              <option value="">GPT-3 Text Davinci 003</option>
              <option value="">GPT-3.5 Turbo</option>
              <option value="">GPT-4</option>
              <option value="">FLAN T5-XXL</option>
            </select>
          </div>
          <div>
          <p className="mb-3"><strong>Train Dataset</strong></p>
            <select name="" id="" className="w-64 h-12 rounded-md border border-slate-800 bg-white">
            <optgroup label="Your Datasets">
              <option disabled hidden selected>Select Dataset</option>
              <option value="">GPT-3 Text Davinci 003</option>
              <option value="">GPT-3.5 Turbo</option>
              <option value="">GPT-4</option>
              <option value="">FLAN T5-XXL</option>
            </optgroup>
            </select>
          </div>
        </div>

        <div>

        </div>

        <div className="flex gap-10 mt-10 text-lg ">
          <div className="bg-slate-200 border rounded-xl border-slate-500 text-slate-800 p-3 w-9/12">

          </div>
          <div className="bg-slate-200 border rounded-xl border-slate-500 w-3/12 p-5 text-slate-800 overflow-y-auto h-[60vh]">
            <div className="mb-3">
              <p className="mb-3">Variables</p>

              <div className="flex gap-4">
                <p className="font-type-machine p-1 pl-2 pr-2 bg-slate-400 rounded-md text-s">input</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-3">Output Column</p>

            </div>

            <div className="mb-3">
              <p className="mb-3">Epochs</p>

              <input type="text" className="h-12 w-full border border-slate-600 rounded-md pl-2 pr-2" />
            </div>

            <div className="mb-3">
              <p className="mb-3">Stop Sequence</p>

              <input type="text" className="h-12 w-full border border-slate-600 rounded-md pl-2 pr-2" />
            </div>


          </div>
        </div>

        <div className="flex mt-10 mb-10 text-slate-800 border border-slate-600 rounded-xl bg-slate-100">
          <div className="w-6/12">
            <div className="bg-slate-300  p-3 rounded-tl-xl border-b border-r border-slate-600">
              Input
            </div>
            <div className="bg-slate-100 border-slate-600 rounded-bl-xl border-r flex ">
              <div className="w-4/12 grid p-3 items-center border-r border-slate-600">
                Input
              </div>
              <div className="w-8/12 p-3">
                <input className='w-full h-[60px] p-3' placeholder="Enter a custom input" />
              </div>
            </div>
          </div>

          <div className="w-3/12 border-r border-slate-600">
            <div className="bg-slate-300  p-3  border-b border-slate-600">
              Input Prompt
            </div>
            <div className="bg-slate-100 p-3  border-slate-600 ">

            </div>
          </div>

          <div className="w-3/12">
            <div className="bg-slate-300  p-3 rounded-tr-xl border-b border-slate-600">
              Target Completion
            </div>
            <div className="bg-slate-100 p-3 border-slate-600 ">

            </div>
          </div>
        </div>

      </div>
    )
    setButtonPushed(1);
  }

  const showContentExamples = () => {
    setContent(
      <div className="w-full rounded-xl p-10 bg-slate-200 text-slate-800">
        <div className=""><strong>Fine-tuned Models</strong></div>
        <p>You currently have no fine-tunings for this app.</p>
      </div>
    )
    setButtonPushed(2);
  }

  useEffect(() => {
    showContentEditor();
  }, []);

  return (
    <>

      <div className="pl-20 pt-20 pr-20 text-white">
        <h1 className="text-3xl"><strong>Fine Tuning</strong></h1>
        <div className="flex">
          <p className="text-lg">We have documentation about this! &nbsp;</p>
          <a href="" className=" hover:underline hover:underline-offset-1 text-lg text-slate-300"> Click to read our documentation</a>
        </div>

        <div className="flex justify-between mt-10 text-lg">
          <div className="flex">
            <button
              className={`pl-5 pr-5 pt-3 pb-3 border border-slate-500 rounded-l-lg hover:bg-slate-600 ${buttonPushed === 1 ? 'bg-slate-500' : ''}`}
              onClick={showContentEditor}
            >
              Create
            </button>
            <button
              className={`pl-5 pr-5 pt-3 pb-3 border border-slate-500 rounded-r-lg hover:bg-slate-600 ${buttonPushed === 2 ? 'bg-slate-500' : ''}`}
              onClick={showContentExamples}
            >
              View Fine-Tuned Models
            </button>
          </div>
          <div className="item-to-align">
            <button className="pl-5 pr-5 pt-3 pb-3 border border-slate-500 rounded-lg bg-slate-500 hover:bg-slate-600">
              Create fine tune
            </button>
          </div>
        </div>

        <div className="mt-10 ">
          {content}
        </div>


      </div>

    </>
  )
}


export default FineTuning