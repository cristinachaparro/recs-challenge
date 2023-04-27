import Image from "next/image";

function Reply() {
  return (
    <div className="flex my-4">
      <div className="w-12 h-12 rounded-full bg-emerald-600"></div>
      <div className="border rounded-lg border-gray-400 ml-6 p-2">
        <label>
          <textarea
            name="postContent"
            rows={4}
            cols={30}
            placeholder="Share your recommendation..."
          />
          <div className="flex justify-between">
            <Image
              className="self-center"
              width={20}
              height={20}
              src="/photo.png"
              alt="photo icon"
            />

            <button className="rounded-md bg-red-400 text-white font-bold p-3">
              Recommend
            </button>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Reply;
