
function createUserProfiles(names, modifiedNames) {
      return names.map((name, index) => {
          return {
              id: index + 1,
              originalName: name,
              modifiedName: modifiedNames[index]
          };
      });
  }
  

  let names = ["Benjamin", "Takyi", "Turkson"];
  let modifiedNames = formatArrayStrings(["Benjamin", "Takyi", "Turkson"], [2, 3, 4]);
  console.log(createUserProfiles(names, modifiedNames));
 
  