import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
  const [query, setQuery] = useSate('');
  const [loading, setLoading] = useState(false);

  // async - must wait for channels to be fetched
  const getChannels = async (text) => {
    try {
        // todo: fetch channels
    } catch (error) {
      setQuery('')
    }
  }

  const onSearch = (event) => {
    // prevent reloading of page
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  }

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
          />
      </div>
    </div>
  )
}

export default ChannelSearch;