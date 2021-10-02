import { useServerApi } from "../../shared/infra/useServerApi";
import { useQuery } from "react-query";

export const useVideos = () => {
  const { videoList } = useServerApi();
  const { data: response, isLoading } = useQuery("videoList", videoList);
  return {
    videos: response ? response.data : [],
    isLoading,
  };
};
