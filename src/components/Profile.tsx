type Props = {
  name?: string;
  age: number;
  img?: string;
  alt: string;
};

export function ChildForProfile({ name, age, alt, img }: Props) {
  // what do I do if some data are not existing?

  if (!name || !age) {
    return <div>loading...</div>;
  }

  return (
    <div className="">
      {/* <div>hello</div> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      {img ? (
        <div style={{ width: 40, height: 40 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={img}
            alt={alt}
          />
        </div>
      ) : (
        <div style={{ width: 40, height: 40 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMUExQTFBIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48Zz48cGF0aCBkPSJNODYuNSwyOC42aC04LjFsLTEtNy4xYy0wLjQtMi45LTEuOS01LjUtNC4yLTcuM2MtMi4zLTEuOC01LjItMi41LTguMS0yLjFMMTIsMTkuNWMtNiwwLjgtMTAuMiw2LjQtOS40LDEyLjRsNSwzNyAgICAgYzAuOCw1LjUsNS41LDkuNSwxMC45LDkuNWMwLjUsMCwxLDAsMS41LTAuMWwyLjEtMC4zYzAuNSw1LjYsNS4yLDEwLDEwLjksMTBoNTMuNmM2LDAsMTEtNC45LDExLTExVjM5LjYgICAgIEM5Ny41LDMzLjYsOTIuNiwyOC42LDg2LjUsMjguNnogTTkxLjUsMzkuNlY3MUw3NS43LDUyLjljLTIuNi0zLTcuNC0zLTEwLDBMNTIuMSw2OC41bC00LjktNS40Yy0yLjUtMi43LTYuOC0yLjctOS4yLDBMMjgsNzQgICAgIFYzOS42YzAtMi43LDIuMi01LDUtNWg1My42Qzg5LjMsMzQuNiw5MS41LDM2LjksOTEuNSwzOS42eiBNMjIsMzkuNnYzMi4ybC0yLjgsMC40Yy0yLjcsMC40LTUuMi0xLjUtNS42LTQuM0w4LjUsMzEgICAgIGMtMC40LTIuNywxLjUtNS4yLDQuMy01LjZsNTMuMS03LjNjMC4yLDAsMC41LDAsMC43LDBjMi40LDAsNC42LDEuOCw0LjksNC4zbDAuOSw2LjNIMzNDMjYuOSwyOC42LDIyLDMzLjYsMjIsMzkuNnoiPjwvcGF0aD48Y2lyY2xlIGN4PSI0Mi41IiBjeT0iNDcuOCIgcj0iNiI+PC9jaXJjbGU+PC9nPjwvZz48L3N3aXRjaD48L3N2Zz4="
            alt={alt}
          />
        </div>
      )}
    </div>
  );
}
