import { useServerApi } from "../../shared/infra/useServerApi";
import { useQuery } from "react-query";

export const useChannels = () => {
  const { channelList } = useServerApi();

  const { data: response, isLoading } = useQuery("channelsList", channelList);

  return {
    channels: response ? response.data.items : [],
    isLoading,
  };
};
