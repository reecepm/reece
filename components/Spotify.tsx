import React from "react";
import { useLanyard } from "use-lanyard";
import styled from "styled-components";
import Playing from "../components/icons/Playing";
import SpotifySvg from "../components/icons/Spotify";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

export const DISCORD_ID = "480435502445756429";

const SpotifyContainer = styled.div`
  width: 368px;
  height: 98px;
  background: white;
  border-radius: 20px;
  padding: 20px 22px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  flex: 1;
  transition: all 0.15s linear;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 256px;
    height: 68px;
    padding: 16px 15px;
    gap: 12px;
  }
`;

const SpotifyColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  flex: 1;
  justify-content: center;
  min-width: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const HideOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Song = styled(HideOverflow)`
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 0.625em;
  }
`;

const Artist = styled(HideOverflow)`
  font-size: 0.75em;
  @media (max-width: 450px) {
    font-size: 0.5em;
  }
`;

const Play = styled.div`
  font-size: 0.5em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;

const PlayingColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (c: React.ReactElement) => React.ReactElement;
  children: React.ReactElement;
}) => (condition ? wrapper(children) : children);

const Spotify = () => {
  const width = useWindowWidth();
  const iconWidth = width < 769 ? 34 : 50;

  const { data: user } = useLanyard(DISCORD_ID, {
    refreshInterval: 30000,
  });

  const listening = user && user.spotify;

  return (
    <ConditionalWrapper
      condition={!!listening}
      wrapper={(children) => (
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://open.spotify.com/track/${user!.spotify!.track_id}`}
        >
          {children}
        </a>
      )}
    >
      <SpotifyContainer>
        {listening ? (
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              height: iconWidth,
              width: iconWidth,
            }}
          >
            <Image
              src={user!.spotify!.album_art_url}
              height={iconWidth}
              width={iconWidth}
              quality={100}
              priority
            />
          </div>
        ) : (
          <SpotifySvg
            height={iconWidth}
            width={iconWidth}
            fill={listening ? undefined : "#bbb"}
          />
        )}
        <SpotifyColumn>
          <Song>
            {listening ? user!.spotify!.song : "not listening to anything"}
          </Song>
          {listening && (
            <Artist>
              {`${user!.spotify!.artist} - ${user!.spotify!.album}`}
            </Artist>
          )}
        </SpotifyColumn>
        <PlayingColumn>
          <div style={{ display: "flex", gap: 3 }}>
            {[0.2, 0.5, 0.35, 0.7, 0.4].map((base, i) => (
              <Playing base={base} key={i} listening={!!listening} />
            ))}
          </div>
          <Play>{listening ? "playing" : "offline"}</Play>
        </PlayingColumn>
      </SpotifyContainer>
    </ConditionalWrapper>
  );
};

export default Spotify;
