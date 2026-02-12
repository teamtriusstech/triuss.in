export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      <div className="text-center md:text-left">
        <div className="text-5xl font-bold text-gray-900 mb-2">15</div>
        <div className="text-gray-600 text-sm">Years of experience</div>
      </div>
      <div className="text-center md:text-left">
        <div className="text-5xl font-bold text-gray-900 mb-2">36k</div>
        <div className="text-gray-600 text-sm">Social followers</div>
      </div>
      <div className="text-center md:text-left">
        <div className="text-5xl font-bold text-gray-900 mb-2">6428</div>
        <div className="text-gray-600 text-sm">Project completed</div>
      </div>
      <div className="text-center md:text-left">
        <div className="text-5xl font-bold text-gray-900 mb-2">92k</div>
        <div className="text-gray-600 text-sm">Social profiles</div>
      </div>
    </div>
  );
}
