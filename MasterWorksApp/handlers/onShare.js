
import { Share } from 'react-native'

export const onShare = async (item) => {
    try {
      const result = await Share.share({
        message:
          ('Github Repo |'+item.full_name+'\n'+ item.html_url )
      });
    } catch (error) {
      // alert(error.message);
    }
  };

  export default onShare;