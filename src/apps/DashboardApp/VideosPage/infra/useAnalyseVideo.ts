import { useServerApi } from "../../shared/infra/useServerApi";
import { useMutation } from "react-query";
import { useAuthenticatedRequest } from "../../../../Authentication/infra/useAuthenticatedRequest";
import { auth } from "../../../../Authentication";

export const useAnalyseVideo = () => {
  const { analyseVideo } = useServerApi();
  const {
    mutate: analyse,
    isSuccess,
    isLoading,
  } = useMutation(async (videoID: string) => {
    const idToken = await auth().currentUser?.getIdToken(true);
    return analyseVideo(videoID, {
      headers: {
        "x-id-token": idToken,
      },
    });
  });
  return {
    analyse,
    isSuccess,
    isLoading,
  };
};
