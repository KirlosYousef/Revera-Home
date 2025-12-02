export function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Never lose a conversation again.
              </h1>
              <p className="text-xl md:text-2xl max-w-xl">
                Revera AI records, transcribes, and summarizes your meetings, calls, and voice notes using AI. Transcribe & Act Hub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/us/app/id6748306699"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-80 transition-opacity inline-block text-center"
              >
                Get Revera AI
              </a>
            </div>
          </div>

          {/* Right Column - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[320px] h-[640px] border-4 border-black rounded-[3rem] bg-white p-4 shadow-2xl">
              {/* Status Bar */}
              <div className="h-6 flex items-center justify-between px-4 mb-4">
                <span className="text-xs">9:41</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-black mb-4">
                <button className="flex-1 py-2 border-b-2 border-black">Transcripts</button>
                <button className="flex-1 py-2 opacity-50">Record</button>
                <button className="flex-1 py-2 opacity-50">Settings</button>
              </div>

              {/* Recording Cards */}
              <div className="space-y-3">
                <div className="border border-black rounded-xl p-4 bg-white">
                  <p className="mb-1">Team standup</p>
                  <p className="opacity-50 mb-2">Today, 9:30 AM · 12 min</p>
                  <p>Discussed Q4 roadmap and sprint planning...</p>
                </div>

                <div className="border border-black rounded-xl p-4 bg-white">
                  <p className="mb-1">Client call</p>
                  <p className="opacity-50 mb-2">Yesterday, 2:15 PM · 28 min</p>
                  <p>Reviewed designs and gathered feedback...</p>
                </div>

                <div className="border border-black rounded-xl p-4 bg-white">
                  <p className="mb-1">Voice note</p>
                  <p className="opacity-50 mb-2">Dec 3, 11:20 AM · 3 min</p>
                  <p>Ideas for the new feature launch...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Badges */}
        <div className="flex flex-wrap gap-4 mt-16 justify-center lg:justify-start">
          <div className="border border-black px-6 py-3 rounded-full">Record</div>
          <div className="border border-black px-6 py-3 rounded-full">Transcribe</div>
          <div className="border border-black px-6 py-3 rounded-full">Summarize</div>
          <div className="border border-black px-6 py-3 rounded-full">Search</div>
          <div className="border border-black px-6 py-3 rounded-full">Organize</div>
          <div className="border border-black px-6 py-3 rounded-full">Share</div>
          <div className="border border-black px-6 py-3 rounded-full">Action Items</div>
        </div>
      </div>
    </section>
  );
}
