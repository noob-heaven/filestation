import { ITreeData } from "@components/file/@types/tree.data";

export const TEST_TREE: ITreeData = {
  isLeaf: false,
  isOpen: false,
  name: 'Root',
  path: '/',
  childLeaf: [
    {
      isLeaf: true,
      isOpen: false,
      name: 'Terminal(/terminal1.txt)',
      metadata: {
        size: 1,
        extension: 'txt',
      },
      path: '/terminal1.txt',
    },
    {
      isLeaf: true,
      isOpen: false,
      name: 'Terminal(/terminal2.txt)',
      metadata: {
        size: 1,
        extension: 'txt',
      },
      path: '/terminal2.txt',
    },
    {
      isLeaf: false,
      isOpen: false,
      name: 'NonWithChild(/non1/)',
      path: '/non1/',
      childLeaf: [
        {
          isLeaf: true,
          isOpen: false,
          name: 'Non1Term1(/non1/term1.pdf)',
          path: '/non1/term1.pdf',
        },
        {
          isLeaf: true,
          isOpen: false,
          name: 'Non1Term2(/non1/term2.pdf)',
          path: '/non1/term2.pdf',
        },
        {
          isLeaf: false,
          isOpen: false,
          name: 'Non1Sub1(/non1/sub/)',
          path: '/non1/sub/',
          childLeaf: [
            {
              isLeaf: true,
              isOpen: false,
              name: 'Non1Sub1Term(/non1/sub/term.end)',
              path: '/non1/term1.pdf',
            },
          ]
        },
      ]
    },
    {
      isLeaf: false,
      isOpen: false,
      name: 'NonWithoutChild(/non2/)',
      path: '/non2/',
    },
  ]
};
