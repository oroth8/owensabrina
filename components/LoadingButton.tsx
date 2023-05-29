import Image from "next/image";
type Props = {
    isLoading: boolean;
};

export default function LoadingButton({isLoading}: {isLoading: boolean}) {
    if(isLoading){
       return(<Image
        src="/images/loading.gif"
        className="mx-auto"
        height={100}
        width={100}
        alt={"Loading"}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
       )
    }else{
        return(
        <button
        type="submit"
        className="bg-green-primary text-white w-full mx-auto max-w-xl mt-4 p-4 font-display tracking-widest"
      >
        FIND RSVP
      </button>
        )
    }
}