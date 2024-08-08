import GameInfo from "@/app/components/GameInfo";
import GameComments from "@/app/components/GameComments";
// import GameCommentForm from "@/app/components/GameCommentForm";
import GameCommentFormClient from "@/app/components/GameCommentFormClient";
import { handleSubmit } from "@/app/components/GameCommentFormServer";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { toggleFav } from "@/app/components/favouriteGame";

export default async function Game({ params }) {
  const user = await currentUser();

  let serverData = undefined;

  if (user === null) {
    let serverData = undefined;
  } else {
    serverData = {
      userId: user.id,
      profileImage: user.imageUrl,
      userName: user.username,
    };
  }

  console.log(serverData);
  return (
    <div className="main-body">
      <GameInfo params={params} userInfo={serverData} toggleFav={toggleFav} />
      <SignedIn>
        <GameCommentFormClient
          handleSubmit={handleSubmit}
          params={params}
          userInfo={serverData}
        />
      </SignedIn>
      <SignedOut>
        <div className="not-signed-in-container">
          <h1>To leave a comment, please sign up/sign in</h1>
          <SignInButton
            mode="modal"
            className="signInToCommentbtn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            forceRedirectUrl={`/game/${params.slug}`}
          />
          <SignUpButton
            mode="modal"
            className="signUpToCommentBtn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            forceRedirectUrl={`/game/${params.slug}`}
          />
        </div>
      </SignedOut>
      <GameComments params={params} />
    </div>
  );
}
